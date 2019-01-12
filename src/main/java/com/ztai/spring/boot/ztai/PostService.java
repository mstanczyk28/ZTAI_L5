package com.ztai.spring.boot.ztai;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostService {

    private static List<Post> posts = new ArrayList<>();
    private static long idCouter = 0;

    static {
        posts.add(new Post(++idCouter,
                "title1",
                "http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg",
                "Bacon ipsum dolor amet filet mignon drumstick picanha ribeye jerky pork belly cupim tail boudin" +
                        " turducken porchetta kielbasa hamburger pancetta pork chop. Doner meatball kielbasa kevin swine." +
                        " Andouille shankle brisket filet mignon ball tip, cupim chicken swine tail shank t-bone. " +
                        "Drumstick pig tenderloin, chicken pork belly ribeye picanha pork chop alcatra t-bone strip " +
                        "steak salami shankle boudin. Swine porchetta shankle rump spare ribs kielbasa landjaeger " +
                        "brisket sirloin turducken. Shoulder alcatra chuck fatback bacon cow ribeye tail frankfurter " +
                        "chicken ham short ribs pork belly tenderloin kielbasa. Pig capicola short loin, ham hock " +
                        "swine frankfurter doner pork belly pork drumstick ham."));

        posts.add(new Post(++idCouter,
                "title2",
                "http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg",
                "Lorem ipsum dolor amet filet mignon drumstick picanha ribeye jerky pork belly cupim tail boudin" +
                        " turducken porchetta kielbasa hamburger pancetta pork chop. Doner meatball kielbasa kevin swine." +
                        " Andouille shankle brisket filet mignon ball tip, cupim chicken swine tail shank t-bone. " +
                        "Drumstick pig tenderloin, chicken pork belly ribeye picanha pork chop alcatra t-bone strip " +
                        "steak salami shankle boudin. Swine porchetta shankle rump spare ribs kielbasa landjaeger " +
                        "brisket sirloin turducken. Shoulder alcatra chuck fatback bacon cow ribeye tail frankfurter " +
                        "chicken ham short ribs pork belly tenderloin kielbasa. Pig capicola short loin, ham hock " +
                        "swine frankfurter doner pork belly pork drumstick ham."));

    }

    public List<Post> getAll(){
        return posts;
    }

    public Post get(int id){
        return posts.get(id-1);
    }
}
