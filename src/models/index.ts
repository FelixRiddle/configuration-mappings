/**
 * If something changes in the future, just by changing the mapping everything will be ok
 * 
 * [Soften change]
 */
import {
    User,
    Category,
    DebugPropertyImageUpload,
    Price,
    Property,
} from "app-models";

export function UserModel() {
    return new User();
}

/**
 * 
 */
export function CategoryModel() {
    return new Category();
}

/**
 * Activation function
 */
export function DebugPropertyImageUploadModel() {
    return new DebugPropertyImageUpload();
}

export function PriceModel() {
    return new Price();
}

/**
 * If a model requires 'activation', get it from here
 */
export function PropertyModel() {
    return new Property();
}
