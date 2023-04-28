package phone;

/**
 * J01_Phone_클래스_오버라이딩
 */
public class J01_Phone_클래스_오버라이딩 {

    public static void main(String[] args) {
        UpdatePhone[] p = new UpdatePhone[3];

        p[0]= new UpdatePhone("아이폰","LG",600,"삼성",24);
        p[1]= new UpdatePhone("갤럭시","KT",800,"신한",24);
        p[2]= new UpdatePhone("아이폰","SKT",1200,"농협",36);

        for(int i=0;i<p.length;i++){
            p[i].showData();

        }
 
        

    }
}