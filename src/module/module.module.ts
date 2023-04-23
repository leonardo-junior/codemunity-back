import { Module } from '@nestjs/common'
import { ModuleService } from './module.service'
import { ModulesController } from './module.controller'
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [ModulesController],
  providers: [ModuleService, PrismaService],
})
export class ModulesModule {}
