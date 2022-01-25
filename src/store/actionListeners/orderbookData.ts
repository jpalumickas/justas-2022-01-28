import { isAnyOf } from '@reduxjs/toolkit';
import { ActionListenerMiddleware } from '@rtk-incubator/action-listener-middleware';
import { throttle } from 'lodash';
import { setData, mergeData, setRenderData } from '~/store/slices/orderbook';

export const addOrderbookDataListener = (
  middleware: ActionListenerMiddleware,
) => {
  middleware.addListener({
    matcher: isAnyOf(setData, mergeData),
    listener: throttle(async (action, listenerApi) => {
      listenerApi.dispatch(setRenderData());
    }, 200),
  });
};
