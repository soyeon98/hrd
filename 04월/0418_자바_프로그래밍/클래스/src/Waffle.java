// 외부 클래스 제작
class Waffle{
    // 리턴값이 있는 메서드
    // 1. 매개변수 없는 메서드
    String name(){
        return "와플";
    }
    // 2. 매개변수 1개(문자열) 있는 메서드
    String name(String source){
        return source+"와플";
    }
    // 3. 매개변수 2개(문자열) 있는 메서드
    String name(String source,String source2 ){
        return source+source2+"와플";
    }
    // 4. 매개변수 3개(문자열,정수형) 있는 메서드
    String name(String source,String source2,int cnt ){
        return source+source2+"와플 "+cnt+"개";
    }
}
