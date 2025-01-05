import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class Details{
    @Prop()
    firstName:string;

    @Prop()
    lastName:string;

    @Prop()
    email:string;

    @Prop()
    birthDate:Date;

    @Prop()
    phoneNumber:number;

    @Prop()
    passWord:string;
}
export const DetailsSchema=SchemaFactory.createForClass(Details);