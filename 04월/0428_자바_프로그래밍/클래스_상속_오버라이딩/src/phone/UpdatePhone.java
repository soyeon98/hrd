package phone;



class UpdatePhone extends Phone{
    private String  card;
    private int month;

    UpdatePhone(){}
    UpdatePhone(String name,String telecom, int price,String card,int month){
        super(name,telecom,price);
        this.card=card;
        this.month=month;
    }
    void showData(){
        super.showData();
        System.out.println("카드 : "+card);
        System.out.println("기간 : "+month);
        System.out.println();
    }
    
}