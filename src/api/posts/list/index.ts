import { internalApi } from 'services/api';
import { IResumedPost } from 'types/post';
import { middleware } from './middleware';

export const listPosts = async (page: number, perPage: number = 10): Promise<IResumedPost[]> => {
  const response = await internalApi.get('/gists', {
    params: {
      page,
      per_page: perPage,
    },
  });

  return middleware(response.data);
};
