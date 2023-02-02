import { TypeOrmModuleOptions } from "@nestjs/typeorm"
export const config: TypeOrmModuleOptions={
    type: 'postgres',
    username:'postgres',
    password:'?netrixADMIN@320',
    host:'127.0.0.1',
    database:'money-tracker',
    synchronize:false,
    entities: ['dist/**/*.entity{.ts,.js}']
}