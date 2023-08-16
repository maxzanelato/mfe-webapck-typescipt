import api from './api';

export const getCards = async ({
  page = 1,
  query = '',
  pageSize = 27,
}) => {
  const res = await api.get(
    `/cards?page=${page}&name=${query}&pageSize=${pageSize}`
  );
  return res.data.cards;
};
