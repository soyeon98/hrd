/**
 * J01_대이터타입_형변환
 */
public class J01_대이터타입_형변환 {

    public static void main(String[] args) {

        System.out.println("");

        //문자(char)와 정수(int)
        System.out.println( "문자와 정수___________________" );
        System.out.println( 65 );
        System.out.println( (char)65 );
        System.out.println( 'a' );
        System.out.println( (int)'a' );
        System.out.println( 'z' );
        System.out.println( (int)'z' );
        System.out.println( 'A' );
        System.out.println( (int)'A' );
        System.out.println( 'Z' );
        System.out.println( (int)'Z' );

        System.out.println("");

        //정수(int,long)와 실수(double,float)
        System.out.println("정수와 실수____________________");
        System.out.println(255);
        System.out.println("255 float 형 "+(float)255);
        System.out.println("255 double형 "+(double)255);

        System.out.println(" (int) 3.14159f "+(int)3.14159f); //실수를 정수로 바꿀때는 데이터가 손실된다.
        System.out.println("(long) 3.14159d "+(long)3.14159d);

        System.out.println("");

         //정수(int,long)& 실수(double,float) & 리터럴 접두사, 접미사
         //실수(double)
         System.out.println("실수(Double)____________________");

         double num_double_D = 546.54664636354642165464121D; //맨 뒤에 접미사 D
         double num_double_d = 546.54664636354642165464121d; //맨 뒤에 접미사 d
         double num_double = 546.54664636354642165464121d;   //맨 뒤에 접미사 생략 *float형은 생략불가

         System.out.println( "num_double_D "+num_double_D);
         System.out.println( "num_double_d "+num_double_d);
         System.out.println( "num_double   "+num_double);

         System.out.println("");
         System.out.println("실수(double) => 정수(int) 형변환__________");

         int num_int1 = (int)num_double_D;
         int num_int2 = (int)num_double_d;
         long num_long = (long)num_double;

         System.out.println( "num_int1 "+num_int1);
         System.out.println( "num_int2 "+num_int2);
         System.out.println( "num_long "+num_long);

        //실수 float
         System.out.println("");
         System.out.println("실수(Float)____________________");

         float num_float_F = 546.54664636354642165464121F; //맨 뒤에 접미사 F 
         float num_float_f = 546.54664636354642165464121f; //맨 뒤에 접미사 f
        //  float num_float   = 546.54664636354642165464121; 맨 뒤에 접미사 생략불가 오류발생
   

         System.out.println( "num_float_F "+num_float_F);
         System.out.println( "num_float_f "+num_float_f);
    
        //실수 float => 실수 double 변환
        System.out.println("");
        System.out.println("실수(float) => 실수(double) 형변환__________");

        double num_double1 = (double)num_float_F; 
        double num_double2 = (double)num_float_f; 

        System.out.println( "num_double1 "+num_double1);
        System.out.println( "num_double2 "+num_double2); 
        
        //수동형변환
        System.out.println("");
        System.out.println("수동형변환 (명시적 형변환)___________");

        //1. String to int
        String strNum = "1"; // 스트링은 첫 글자 대문자로 선언 리터럴값은 더블코트를 사용한다.
        int intNum = Integer.parseInt(strNum);
        System.out.println("String to int__________");
        System.out.println(" String strNum =1 " + strNum);
        System.out.println(" Integer.parseInt(strNum) => intNum " + intNum);

        //2. String to double
        System.out.println("");
        double doubleNum = Double.valueOf(strNum);
        System.out.println("String to double________________");
        System.out.println(" String strNum =1 " + strNum);
        System.out.println(" Double.valueOf(strNum) => doubleNum " + doubleNum);

        //3. String to float
        System.out.println("");
        float floatNum = Float.valueOf(strNum);
        System.out.println("String to float___________");
        System.out.println(" String strNum =1 " + strNum);
        System.out.println(" Float.valueOf(strNum) => floatNum " + floatNum);

        //4. String to long
        System.out.println("");
        long longNum = Long.parseLong(strNum);
        System.out.println("String to long___________");
        System.out.println(" String strNum =1 " + strNum);
        System.out.println(" Long.parseLong(strNum) => longNum " + longNum);

        //5. String to short
        System.out.println("");
        short shortNum = Short.parseShort(strNum);
        System.out.println("String to short___________");
        System.out.println(" String strNum =1 " + strNum);
        System.out.println(" Short.parseShort(strNum) => shortNum " + shortNum);
        
        //숫자=> 문자
        System.out.println("");
        System.out.println("숫자 => 문자 수동형변환 (명시적 형변환)");
        int intNum2=10;
        String strNum2 ="";
        strNum2 = String.valueOf(intNum2);

        System.out.println("intNum2 = "+ intNum2);
        System.out.println("String.valueOf(intNum2) => strNum2 "+ strNum2);

        //정수 => 실수
        System.out.println("");
        System.out.println("정수 => 실수 수동형변환 (명시적 형변환)");
        double doubleNum2 = 1.12345;
        float floatNum2 = 1.12345f;
        int intNumResult;

        //Double to int
        intNumResult=(int)doubleNum2;

        System.out.println("doubleNum2 "+doubleNum2);
        System.out.println("intNumResult=(int)doubleNum2 => intNumResult "+intNumResult);

        //Float to int
        intNumResult=(int)floatNum2;

        System.out.println("floatNum2 "+floatNum2);
        System.out.println("intNumResult=(int)floatNum2 => intNumResult "+intNumResult);

        
  




    }
}