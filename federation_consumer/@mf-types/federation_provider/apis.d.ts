
    export type RemoteKeys = 'federation_provider/button' | 'federation_provider/store';
    type PackageType<T> = T extends 'federation_provider/store' ? typeof import('federation_provider/store') :T extends 'federation_provider/button' ? typeof import('federation_provider/button') :any;