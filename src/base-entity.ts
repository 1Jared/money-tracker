import{CreateDateColumn, PrimaryGeneratedColumn} from "typeorm"
export class BaseEntity{
    @PrimaryGeneratedColumn()
      id?:number;
    @CreateDateColumn({nullable:true})
      createdate?:Date;
      @CreateDateColumn({nullable:true})
      txndate?:Date;
      
}