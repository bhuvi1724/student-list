var student_name_array=[]
for (let j = 1; j <=4; j++) {  
}
function showlist(){
    for (let j = 1; j <=4; j++) { 
        var student=document.getElementById("name_of_the_student_"+j).value 
        student_name_array.push (student)
    } 

    document.getElementById("display_name_with_commas").innerHTML=student_name_array
    document.getElementById("display_name_without_commas").innerHTML=student_name_array.join(" ")
    document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
   document.getElementById("2_list").innerHTML=student_name_array.sort() 
}
