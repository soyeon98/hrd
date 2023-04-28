package phone2;

public class UpdatePhone2 extends Phone2 {
    private String  card;
    private int month;


    public void setData(String name, String telecom, int price,String card,int month){
        super.setData(name,telecom,price);
        this.card=card;
        this.month=month;
    }
    void showData(){
        super.showData();
        System.out.println("카드"+card);
        System.out.println("기간"+month);
        System.out.println();
    }
    public class setData {

        public setData(String string, String string2, int i, String string3, int j) {
        }
    }
}
