import{CreateDateColumn, PrimaryGeneratedColumn} from "typeorm"
export class BaseEntity{
    @PrimaryGeneratedColumn()
      id:number;
    @CreateDateColumn({type:'timestamp',default: ()=> 'CURRENT_TIMESTAMP'})
      createdate?:Date;
      @CreateDateColumn({type:'timestamp',default: ()=> 'CURRENT_TIMESTAMP'})
      txndate?:Date;
      
}