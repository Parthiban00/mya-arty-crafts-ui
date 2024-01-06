import { Product } from "./product.interface";

export interface Address {
    fullAddress: string,
    default: boolean;
}

export interface UserInfo {
    _id: string;
    fullName: string;
    email: string;
    mobileNo: string;
    address?: Address[];
}

export interface Orders {
    totalAmount: number;
    userInfo?: UserInfo;
    orderDate: Date;
    shippingCharges?: number;
    items: Product[];
}

export interface OrdersStatus {
    pending: Orders[];
    completed: Orders[];
    cancelled: Orders[];
}

export interface Coupons {
    discount: number;
    discountType: 'Percentage' | 'Amount';
    description: string;
    code: string;
    validDate: Date;

}

export interface MyAccountInfo {
    userInfo: UserInfo;
    orders: OrdersStatus;
    addresses: Address[];
    coupons: Coupons[];
    totalOrders:number;
}