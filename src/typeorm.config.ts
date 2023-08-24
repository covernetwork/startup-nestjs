import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DataSource, DataSourceOptions } from "typeorm";

export const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'test',
  entities: [`${__dirname}/**/*.entity.{ts,js}`],
  migrations: [`${__dirname}/migration/*.{ts,js}`],
  synchronize: true,
}

export const connectionSource = new DataSource(config as DataSourceOptions);
export default registerAs('typeorm', () => config)
