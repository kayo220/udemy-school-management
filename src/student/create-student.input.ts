import { InputType, Field } from "@nestjs/graphql";
import { MinLength, IsDateString } from 'class-validator'

@InputType()
export class CreateStudentInput {
    @Field()
    @MinLength(1)
    firstName: string;

    @Field()
    @MinLength(1)
    lastName: string;

}