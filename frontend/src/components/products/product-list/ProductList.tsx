// import { debounce } from "lodash";
import { useUpdateEffect } from 'usehooks-ts';
import FilterBoard from '~/components/products/filters/FilterBoard';
import UserTypeTabs from '~/components/products/tabs/UserTypeTabs';
import ProductCardList from './ProductCardList';
import {
  useCallback,
  useContext,
  useDebugValue,
  useEffect,
  useState,
} from 'react';
import { axiosInstance } from '~/utils/axios.util';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { AuthContext } from '~/contexts/auth/AuthContext';

const pageSize = 9;
const productPerPage = 20;

function addProductToFavoriteList(favoriteProductId) {
  return axiosInstance.post(`favorite-list/${String(favoriteProductId)}`);
}

function removeProductFromFavoriteList(favoriteProductId) {
  return axiosInstance.delete(`favorite-list/${String(favoriteProductId)}`);
}

const ProductList = () => {
  const params = useParams();
  const type = params.type;
  const authContext = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [userType, setUserType] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [gridView, setGridView] = useState<boolean>(false);
  // const [accessToken, setAccessToken] = useState<string | null>(() => localStorage.getItem('accessToken'));
  const [favoriteProductIds, setFavoriteProductIds] = useState<any[]>([]);

  useEffect(() => {
    console.log('first mount');
    const controller = new AbortController();

    async function favoriteListPopulate() {
      try {
        // const data = await getFavoriteList(accessToken, controller.signal);
        const response = await axiosInstance.get('favorite-list', {
          signal: controller.signal,
        });
        const data = response.data;
        if (data && data.productIds) {
          setFavoriteProductIds(data.productIds);
        }
      } catch (error) {
        console.error(error);
      }
    }

    favoriteListPopulate();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    console.log({ favoriteProductIds });
  }, [favoriteProductIds]);

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery({
      queryKey: ['products', currentPage, category, userType, type],
      queryFn: ({ signal }) => {
        const filters = {
          ...(category && { category }),
          ...(userType && { userType }),
          ...(type && {
            type:
              type === 'mua-ban'
                ? 'canban'
                : type === 'cho-thue'
                ? 'chothue'
                : 'duan',
          }),
        };

        const params = new URLSearchParams({
          limit: `${productPerPage}`,
          offset: `${productPerPage * (currentPage - 1)}`,
          ...filters,
        });

        console.log({
          limit: `${productPerPage}`,
          offset: `${productPerPage * (currentPage - 1)}`,
          ...filters,
        });

        return axiosInstance.get('/products', { params, signal });
      },
      // keepPreviousData: true,
      refetchOnWindowFocus: false,
    });

  const products = data?.data;

  useEffect(() => {
    axiosInstance
      .get('/products/count')
      .then((result) => setNumPages(Math.ceil(Number(result.data) / pageSize)))
      .catch((error) => console.error(error));

    const storedPage = sessionStorage.getItem('currentPage');
    if (storedPage) {
      setCurrentPage(JSON.parse(storedPage));
    }
  }, []);

  useEffect(() => {
    console.log({ currentPage, category, userType, gridView });
  }, [currentPage, category, userType, gridView]);

  useEffect(() => {
    if (products) {
      console.log({ products });
    }
  }, [products]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 10, behavior: 'smooth' });
    sessionStorage.setItem('currentPage', JSON.stringify(page));
  };

  const handleViewModeToggle = () => {
    setGridView((prev) => !prev);
  };

  const handleFavoriteButtonClick = async (id) => {
    const productId = id;

    console.log({ favoriteProductIds });

    if (favoriteProductIds && !favoriteProductIds.includes(productId)) {
      addProductToFavoriteList(productId)
        // axiosAuth.post(`favorite-list/${String(productId)}`)
        .then(() => {
          console.log('adding product to favorite list');
          return axiosInstance.get('favorite-list');
        })
        .then((response) => {
          const data = response.data;
          // console.log({ data });

          if (data) {
            if (!data.productIds) {
              setFavoriteProductIds([]);
            }

            if (data.productIds) {
              // if unauthorized, will be undefined, requires refreshing token before sending request
              setFavoriteProductIds(data.productIds);
            }
          }
        })
        .catch((error) => {
          console.error(error);

          if (error.name === 'USER_NOT_FOUND') {
            authContext?.redirectToRegisterPage();
          } else {
            authContext?.redirectToLoginPage();
          }
        });
    } else if (favoriteProductIds && favoriteProductIds.includes(productId)) {
      removeProductFromFavoriteList(productId)
        // axiosAuth.delete(`favorite-list/${String(productId)}`)
        .then(() => {
          console.log('removing product from favorite list');
          return axiosInstance.get('favorite-list');
        })
        .then((response) => {
          const data = response.data;
          // console.log({ data });

          if (data) {
            if (!data.productIds) {
              setFavoriteProductIds([]);
            }

            if (data.productIds) {
              setFavoriteProductIds(data.productIds);
            }
          }
        })
        .catch((error) => {
          console.error(error);

          if (error.name === 'USER_NOT_FOUND') {
            authContext?.redirectToRegisterPage();
          } else {
            authContext?.redirectToLoginPage();
          }
        });
    }
  };

  return (
    <>
      <FilterBoard category={category} setCategory={setCategory} />
      <UserTypeTabs
        userType={userType}
        setUserType={setUserType}
        onViewModeToggle={handleViewModeToggle}
      />
      <ProductCardList
        favoriteProductIds={favoriteProductIds}
        onFavoriteButtonClick={handleFavoriteButtonClick}
        isGridView={gridView}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numPages={numPages}
        setNumPages={setNumPages}
        onPageChange={handlePageChange}
        products={products}
      />
    </>
  );
};

export default ProductList;
