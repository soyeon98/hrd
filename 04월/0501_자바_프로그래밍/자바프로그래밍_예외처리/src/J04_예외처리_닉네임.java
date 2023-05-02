import java.util.Scanner;

public class J04_예외처리_닉네임 {
    public static void main(String[] args) {
        // 포함할 수 없는 닉네임
        String[] nickName ={"사라","왕자","구름","나그네","대통령"};
        String nick ="";
        // 예시 => "왕자"(은)는 사용할 수 없는 닉네임입니다.

        // 입력은 화면입력으로 받기
        // 제한 글자는 3~16글자 이내로 사용
        // 예외처리
        // 1. 닉네임은 3글자에서 16자 이내로 작성해야합니다. nick.length >= 3 && nick.length <= 16
        // 2. 닉네임은 입력된 단어를 포함 할 수 없습니다. nick.indexOf(nickName[i]) >= 0
        // if(){
        //      throw new Exception(닉네임은 3글자에서 16자 이내로 작성해야합니다.);
        // }
        // if(){
        //      throw new Exception(닉네임은 입력된 단어를 포함 할 수 없습니다.);
        // }

        Scanner sc = new Scanner(System.in);
        while(true){
            try{
                System.out.println("등록할 닉네임을 입력하세요.");
                nick = sc.nextLine();
                if(nick.length()<3||nick.length()>16){
                    throw new Exception("닉네임은 3글자에서 16자 이내로 작성해야합니다.");
                    
                }
                for(int i=0;i<nickName.length;i++){
                    // indexOf() 비교 - 포함된 단어 찾아냄
                    // System.out.println("indexOf : "+nick.indexOf(nickName[i]));
                    // contains() 비교 - 포함된 단어 찾아냄
                    // System.out.println("contains : "+nickName[i].contains(nick));
                    // System.out.println("contains : "+nick.contains(nickName[i]));
                    // equals() 비교 - 같은 단어를 찾아냄
                    // System.out.println("equals : " +nickName[i].equals(nick) );

                    // if(nick.indexOf(nickName[i])>=0){
                    //     throw new Exception("닉네임은 입력된 단어 ["+nickName[i] +"]을(를) 포함 할 수 없습니다.");
                      
                    // }

                    if(nick.contains(nickName[i])){
                        throw new Exception("닉네임은 입력된 단어 ["+nickName[i] +"]을(를) 포함 할 수 없습니다.");
                    }

                    // if(nick.equals(nickName[i])){ 
                    //     throw new Exception("닉네임은 입력된 단어 ["+nickName[i] +"]을(를) 포함 할 수 없습니다.");
                    // }


                }
                System.out.println("닉네임이 등록되었습니다.");
                break;
            }
            catch(Exception e){
                System.err.println("오류발생 "+e.getMessage());
            }
        }

    }
}
