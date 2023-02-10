/**
 * Store API
 * Store API documentation
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { UserDTO } from './userDTO';

export interface CustomerDetailsDTO { 
    id?: number;
    gender: CustomerDetailsDTO.GenderEnum;
    phone: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    country: string;
    latitude?: number;
    longitude?: number;
    geohash?: string;
    olc?: string;
    user?: UserDTO;
}
export namespace CustomerDetailsDTO {
    export type GenderEnum = 'MALE' | 'FEMALE' | 'OTHER';
    export const GenderEnum = {
        MALE: 'MALE' as GenderEnum,
        FEMALE: 'FEMALE' as GenderEnum,
        OTHER: 'OTHER' as GenderEnum
    };
}