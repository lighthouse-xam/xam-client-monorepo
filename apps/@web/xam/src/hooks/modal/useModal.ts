import { ForwardedRef, useCallback, useImperativeHandle } from 'react';

import { ModalRef } from '@components/common';

import { useGlobalState } from '../../hooks/common';

export function useModal<C>(modalQueryKey: string, ref: ForwardedRef<ModalRef<C>>) {
  const [, setModalVisible] = useGlobalState(['modal', modalQueryKey], false, false);

  const [viewProps, setViewProps] = useGlobalState<C | null>(
    ['modal', modalQueryKey, 'props'],
    null,
    false
  );

  const close = useCallback(() => {
    setModalVisible(false);
  }, [setModalVisible]);

  useImperativeHandle(
    ref,
    () => ({
      open: (viewProps) => {
        setViewProps(viewProps);
        setModalVisible(true);
      },
      close,
    }),
    [setViewProps, setModalVisible, close]
  );

  return [viewProps, close] as const;
}
