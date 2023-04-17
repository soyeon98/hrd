/**
 * J01_1차원배열_정수_실수_문자열
 */
public class J01_1차원배열_실수 {

    public static void main(String[] args) {
        
        // 실수형 1차원 배열 생성하고 데이터를 대입하라
        double[] grade = {4.5, 3.7, 2.8, 3.3, 4.2, 4.0, 3.2};
        // double[] grade = new double[7]; 7개 배열 갯수 

        // 문제1) 배열 값 => 배열 인덱스
        // 세번째 배열 인덱스 이용 데이터 가져오기
        // 배열이름[index number] index : 0 ~ n (n은 배열의 총 갯수 - 1)
        // 배열이름.길이 => grade.length => 결과 : 7 인덱스번호는 0부터 6(7-1)까지

        // 조건 - 점수가 3.5이상 인원수 카운트 하라

        int cnt=0;
        double sum=0;
        System.out.println("----------for문--------------");
        for(int i=0;i<grade.length;i++){
            if(grade[i]>=3.5){
                System.out.println("grade["+i+"] : "+grade[i]);
                sum+=grade[i];
                cnt++;
            }          
        }
        System.out.println("3.5 이상 학점 학생 수 : "+cnt+" 명");
        System.out.println("3.5 이상 학점 합 : "+sum+" 점");


        System.out.println("---------while문-----------");

        int i=-1;
        cnt=0;
        sum=0;
        while(i<grade.length-1){ // -1 0 1 2 3 4 5 6 
            i++; // 0 1 2 3 4 5 6 7 => 7에서 버그발생 인덱스번호 초과 오류 => grade.length-1로 범위 설정해줘야함
            if(grade[i]>=3.5){
                System.out.println("grade["+i+"] : "+grade[i]);
                sum+=grade[i];
                cnt++;
            }   
        }
        System.out.println("3.5 이상 학점 학생 수 : "+cnt+" 명");
        System.out.println("3.5 이상 학점 합 : "+sum+" 점");

    }
}