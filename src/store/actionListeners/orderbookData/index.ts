import { isAnyOf } from '@reduxjs/toolkit';
import { ActionListenerMiddleware } from '@rtk-incubator/action-listener-middleware';
import { throttle } from 'lodash';
import {
  snapshotData,
  mergeData,
  setRenderData,
} from '~/store/slices/orderbook';
import { getThrottleTime } from '~/utils/orderbook/getThrottleTime';

const throttleTime = getThrottleTime();

export const addOrderbookDataListener = (
  middleware: ActionListenerMiddleware,
) => {
  middleware.addListener({
    matcher: isAnyOf(snapshotData, mergeData),
    listener: throttle(async (action, listenerApi) => {
      listenerApi.dispatch(setRenderData());
    }, throttleTime),
  });
};
