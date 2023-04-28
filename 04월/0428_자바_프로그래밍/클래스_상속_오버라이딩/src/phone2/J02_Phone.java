package phone2;

/**
 * J02_Phone
 */
public class J02_Phone {

    public static void main(String[] args) {
        UpdatePhone2 p1 = new UpdatePhone2();
        UpdatePhone2 p2 = new UpdatePhone2();
        UpdatePhone2 p3 = new UpdatePhone2();

        p1.setData("아이폰","LG",600,"삼성",24);
        p2.setData("아이폰","LG",600,"삼성",24);
        p3.setData("아이폰","LG",600,"삼성",24);
        
        p1.showData();
        p2.showData();
        p3.showData();

    }
}