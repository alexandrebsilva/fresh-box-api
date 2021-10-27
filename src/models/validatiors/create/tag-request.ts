import { IsString } from "class-validator";

export class TagCreateRequest {
  @IsString()
  name!: string;
}
