
    export type RemoteKeys = 'federation_provider/button';
    type PackageType<T> = T extends 'federation_provider/button' ? typeof import('federation_provider/button') :any;