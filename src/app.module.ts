import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { CategoryController } from './category/category.controller';
import { ContryesModule } from './contryes/contryes.module';
import { CategoryModule } from './category/category.module';
import { BrandsModule } from './brands/brands.module';
import { GendersModule } from './genders/genders.module';

@Module({
  imports: [MenuModule, ContryesModule, CategoryModule, BrandsModule, GendersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
