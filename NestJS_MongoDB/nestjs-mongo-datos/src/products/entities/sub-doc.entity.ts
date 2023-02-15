/* eslint-disable @typescript-eslint/ban-types */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class SubDoc {
  @Prop()
  name: String;

  @Prop()
  description: String;
}

export const SubDocSchema = SchemaFactory.createForClass(SubDoc);
