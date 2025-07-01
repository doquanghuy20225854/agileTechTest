import axiosInstance from './axios';
import { Post } from '../types/post';
import { getToken } from '../utils/token';

interface GetPostsParams {
  page?: number;
  title?: string;
}

interface GetPostsResponse {
    posts: Post[];
    total_pages: number;
}

export const getPosts = async (params: GetPostsParams): Promise<GetPostsResponse> => {
  const response = await axiosInstance.get('/posts', { params });
  return response.data;
};

export const deletePost = async (postId: string) => {
  const accessToken = getToken();
  const response = await axiosInstance.delete(`/posts/${postId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export const updatePost = async (postId: string, data: { title?: string; content?: string }) => {
  const accessToken = getToken();
  const response = await axiosInstance.patch(`/posts/${postId}`, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
