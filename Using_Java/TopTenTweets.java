import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Scanner;

public class TopTenTweets {
    public static  Map<String, Integer> keyWordSearch(String[] keyWord) {
        // Initialising search string
        Map<String, Integer> frequencyMap = new HashMap<>();
        for (int i = 0; i < keyWord.length; i++)
        {
            String fullString = keyWord[i];
            String result[] = fullString.split(" ");
            String subst = new String("#");
            for (int k = 0; k < result.length; k++)   {
                if(result[k].startsWith(subst)) {
                    int index=fullString.indexOf(subst);
                    String nickname = fullString.substring(index);
                    if(frequencyMap.containsKey(nickname)){
                        frequencyMap.put(nickname, frequencyMap.get(nickname)+1);
                    }else{
                        frequencyMap.put(nickname, 1);
                    }
                }
            }
        }
        return frequencyMap;
    }

    public static void main(String[] args) {

        // creates an object of Scanner
        Scanner input = new Scanner(System.in);

        System.out.print("Enter number of tweets you wish to enter: ");

        // takes input from the keyboard
        int tc=input.nextInt();
        String[] string = new String [tc];
        while(tc-->0) {
            for (int i = 0; i < string.length; i++)
            {
                string[i] = input.nextLine();
            }
            // closes the scanner
            Map<String, Integer> res=keyWordSearch(string);
            System.out.println("Top hashtags out of " + tc + "tweets are");
            for (Entry<String, Integer> entry : res.entrySet()) {
                System.out.println(entry.getKey() + ": " + entry.getValue());
            }
        }
    }
}