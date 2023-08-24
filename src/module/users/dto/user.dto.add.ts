import { Type } from "class-transformer";
import { IsNotEmpty, IsOptional } from "class-validator";

export class UserDtoAdd {

  @IsNotEmpty()
  name: string;

  @IsOptional()
  @Type(() => String)
  address: string;

}