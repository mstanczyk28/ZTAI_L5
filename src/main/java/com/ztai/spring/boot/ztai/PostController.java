package com.ztai.spring.boot.ztai;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class PostController {

    private PostService postService;

    @Autowired
    public PostController(PostService postService){
        this.postService = postService;
    }

    @GetMapping("/posts")
    public List<Post> getAllPosts(){
        System.out.println("jestem");
        return postService.getAll();
    }

    @GetMapping("/posts/{id}")
    public Post getPost(@PathVariable("id") Integer id){
        return postService.get(id);
    }
}
