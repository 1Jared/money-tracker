import { TypeOrmModuleOptions } from "@nestjs/typeorm"
export const config: TypeOrmModuleOptions={
    type: 'postgres',
    username:'postgres',
    password:'?netrixADMIN@320gg',
    port:5432,
    host:'127.0.0.1',
    database:'money-tracker',
    synchronize:true,
    entities: ['dist/**/*.entity{.ts,.js}']
}