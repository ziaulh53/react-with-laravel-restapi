export const auth = {
    login: '/login',
    reg: '/signup',
    logout: '/logout',
    forgetPassword: '/admin/forget-password',
    resetPassword: '/admin/reset-password'
}

export const user = {
    getUser: '/user'
}

export const brand = {
    getBrands: '/admin/brand',
    createBrand: '/admin/brand/create',
    editBrand: '/admin/brand/edit/',
    deleteBrand: '/admin/brand/delete/',
}
export const category = {
    getCategory: '/admin/category',
    createCategory: '/admin/category/create',
    editCategory: '/admin/category/edit/',
    deleteCategory: '/admin/category/delete/',
}

export const product = {
    getProdcuts: '/admin/product',
    createProduct: '/admin/product/create',
    editProduct: '/admin/product/edit/',
    deleteProduct: '/admin/product/delete/',
}

export const color = {
    getColors: '/admin/color',
    createColor: '/admin/color/create',
    editColor: '/admin/color/edit/',
    deleteColor: '/admin/color/delete/',
}

export const landing = {
    getHomePageData: '/admin/landing',
    updateBanner: '/admin/landing/banner',
    updateTrending: '/admin/landing/trending',
}
export const orderEndpoint = {
    getOrders: '/admin/order/',
    updateStatus: '/admin/order/update-status/',
}

export const dashboardEndpoint = {
    getDashboardData: '/admin/dashboard/',
    getCategorySelling: '/admin/dashboard/by-category/'
}


export const fileUpload = '/file-upload';