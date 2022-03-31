
#include <stdio.h>

char* xyz_there();

int main() {
    printf("%s", xyz_there("abcxyz.xyz."));
    return 0;
}
char* xyz_there(char * string){
  int i=0, count=0;
  while(string[i] != '\0'){
    if(string[i-2]=='x'&& string[i-1]=='y'&&string[i-1]=='y'){
      if(string[i-3]=='.');
      else
      count++;
    }
    i++;
  }
  if(count > 0)
    return "true";
    return "false";
}


/*

Return True if the given string contains an appearance of "xyz" where the xyz is not directly preceeded by a period (.). So "xxyz" counts but "x.xyz" does not.


xyz_there('abcxyz') → True
xyz_there('abc.xyz') → False
xyz_there('xyz.abc') → True*/

