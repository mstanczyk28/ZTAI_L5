package com.ztai.spring.boot.ztai.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
//
@CrossOrigin
@RestController
public class PostResource{

//    private PostService postService;

    private final PostRepository postRepository;

    @Autowired
    public PostResource(PostRepository postRepository) {
        this.postRepository = postRepository;
    }


    @GetMapping("/api/posts")
    public List<Post> getAllPosts() {
        Post post =  new Post(Long.getLong("1"),
                "title1",
                "http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg",
                "Bacon ipsum dolor amet filet mignon drumstick picanha ribeye jerky pork belly cupim tail boudin" +
                        " turducken porchetta kielbasa hamburger pancetta pork chop. Doner meatball kielbasa kevin swine.");
        postRepository.save(post);

        return postRepository.findAll();
    }

    @GetMapping("/api/posts/{id}")
    public Post get(@PathVariable long id) {
        return postRepository.findById(id).get();
    }

    @PostMapping("/api/post")
    public ResponseEntity<Void> createPost(@RequestBody Post post) {
        Post postUpdated = postRepository.save(post);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id").buildAndExpand(postUpdated.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }
}

