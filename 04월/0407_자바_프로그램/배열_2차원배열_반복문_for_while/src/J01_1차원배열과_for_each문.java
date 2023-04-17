/**
 * J01_1차원배열과_for_each문
 */
public class J01_1차원배열과_for_each문 {

    // 내부 클래스 위치
    // enum Month {1,2,3,4,5,6,7,8,9,10,11,12}
    public static void main(String[] args) {
        // 1차원 배열생성하고
        // for-each 문 이용 반복 출력
        // 순차적으로 나열(enum)된 각 원소값들을 접근하는데 유용한 반복문
        // 사용이 간단하다.

        // 정수 데이터 순차 나열된 배열
        int[] num1 = {1,2,3,4,5,6,7};

        for(int i:num1) //한가지만 출력 할때 스코프표시{} 제거 가능
            System.out.println("NUM1 배열 원소 = "+ i);
        
        System.out.println();
        for(int i:num1){
            System.out.println("NUM1 배열 원소 = "+ i);
        }

        System.out.println();

        // 문자열 데이터 순차 나열된 배열
        String[] fruit = {"사과","체리","딱딱한 복숭아","수박","귤","바나나","딸기"};
        for(String f:fruit){ // f in fruit
            System.out.println(" 내가 좋아하는 과일 : "+ f);
        }

        System.out.println();
        String[] month = {"1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"};
        for(String m : month){
            System.out.println("MONTH : "+ m);
        }
        System.out.println();

        // 클래스 수업내용입니다.
        // 내부/외부 클래스 위치한다
        // enum Month {"1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"};

        // for(Month m : Month.values()){
        //     System.out.println("월 별 : "+ m + "월");
        // }
    }
    
}