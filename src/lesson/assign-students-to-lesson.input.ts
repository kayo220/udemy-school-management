import { InputType, Field, ID } from "@nestjs/graphql";
import { IsUUID } from "class-validator";

@InputType()
export class AssignStudentsToLessonInput {
    @Field(type => ID)
    @IsUUID()
    lessonId: string;

    @IsUUID("4", { each: true })//4 = version of uuid...could pass "all"
    @Field(type => [ID])
    studentIds: string[]

}