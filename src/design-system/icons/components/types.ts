import { Optional } from '~/types';

import { TIconProps } from '../icon.types';

export type TBaseIconProps = Optional<TIconProps, 'name' | 'opacity'>;
