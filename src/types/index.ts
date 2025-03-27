import { ComponentType } from 'react';

export type PickPartial<T, K extends keyof T> = { [P in K]: Partial<T[P]> };

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type TColorsList = string[];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TScreenComponent = ComponentType<any>;

/**
 * Simple generic utility type for defining object types.
 */
export type TObject = Record<string, unknown>;

export type TScreenOptions = Record<string, unknown>;

declare module 'react' {
  /**
   * Redefine `React.forwardRef` type to support generic types.
   * - https://fettblog.eu/typescript-react-generic-forward-refs/
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
    displayName: string
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}
