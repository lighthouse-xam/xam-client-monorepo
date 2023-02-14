import { forwardRef, ForwardRefRenderFunction } from 'react';

import { ModalProps, ModalRef } from '../../components/common';

export function forwardModalRef<T = object, P = object>(
  render: ForwardRefRenderFunction<ModalRef<T>, ModalProps<P>>
) {
  return forwardRef(render);
}
