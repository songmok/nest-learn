import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 1234,
  username: 'postgres',
  password: '1234',
  database: 'movies',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
