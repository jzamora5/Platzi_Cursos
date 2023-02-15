/* eslint-disable @typescript-eslint/ban-types */
import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateSubDocDto {
  @IsString()
  @IsNotEmpty()
  readonly name: String;

  @IsString()
  @IsNotEmpty()
  readonly description: String;
}

export class UpdateSubDocDto extends PartialType(CreateSubDocDto) {}
