/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as FluidStackApi from "../../api/index";
import * as core from "../../core";
import { ValidationErrorLocItem } from "./ValidationErrorLocItem";

export const ValidationError: core.serialization.ObjectSchema<
    serializers.ValidationError.Raw,
    FluidStackApi.ValidationError
> = core.serialization.object({
    loc: core.serialization.list(ValidationErrorLocItem),
    msg: core.serialization.string(),
    type: core.serialization.string(),
});

export declare namespace ValidationError {
    interface Raw {
        loc: ValidationErrorLocItem.Raw[];
        msg: string;
        type: string;
    }
}
