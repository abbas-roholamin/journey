import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthPayload {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  token: string;
}
