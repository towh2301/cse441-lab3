// export interface ApiResponseType<T> {
//     code: number;
//     result: T;
//     message?: string;
// }

// export interface PaginationResponseType<T> {
//     current: number;
//     totalPages: number;
//     pageSize: number;
//     totalElements: number;
//     data: T;
// }

// helpers.ts
export interface PaginationResponseType<T> {
    products: T; // Mảng sản phẩm
    total: number; // Tổng số sản phẩm
    skip: number; // Số bản ghi đã bỏ qua
    limit: number; // Số bản ghi tối đa mỗi lần fetch
}

// ApiResponseType không cần "result" nữa
export type ApiResponseType<T> = T;

export type TableParams = {
    skip?: number;
    take?: number;
    order?: string;
    search?: string;
    sort?: string;
    [key: string]: number | boolean | string | string[] | undefined;
};

// type ApiCall = (..._args: any[]) => Promise<any>;
// export async function responseWrapper<T>(func: ApiCall, [...args]: any[] = []): Promise<T> {
//     // eslint-disable-next-line no-async-promise-executor
//     return new Promise(async (res, rej) => {
//         try {
//             const response = (await func(...args)) || {};
//             if (response.status >= 200 && response.status < 300) res(response.data);
//             if (response?.originalError?.message === 'CONNECTION_TIMEOUT') {
//                 alert('Connection timeout. Please check your network and try again.');
//             }
//             rej(response.data);
//         } catch (err) {
//             rej(err);
//         }
//     });
// }

export async function responseWrapper<T>(
    apiFunction: (params: any) => Promise<T>,
    params: any
  ): Promise<T> {
    try {
      const response = await apiFunction(params);
      return response;
    } catch (error) {
      console.error("Error in responseWrapper:", error);
      throw error;
    }
  }

export const isEmpty = (obj: object) => {
    return Object.keys(obj).length === 0;
};