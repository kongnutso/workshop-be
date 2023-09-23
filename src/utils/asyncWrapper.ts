import { RequestHandler } from 'express';
import { ParamsDictionary, Query } from 'express-serve-static-core';

type AsyncWrapperFn = <
  TRequestParams extends ParamsDictionary,
  TResponseBody,
  TRequestBody,
  TRequestQuery extends Query,
>(
  fn: RequestHandler<TRequestParams, TResponseBody, TRequestBody, TRequestQuery>,
) => RequestHandler<TRequestParams, TResponseBody, TRequestBody, TRequestQuery>;

/**
 * function to wrap the express middleware which implement in the asynchronous way.
 * It will handle exception thrown by calling the NextFunction function.
 * Example:
 *   const fooMiddleware = async (req, res) => res.send(req.body)
 *   asyncWrapper(fooMiddleware)
 */
export const asyncWrapper: AsyncWrapperFn = (fn) => async (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch((e) => {
    console.log(e);
    next(e);
  });
