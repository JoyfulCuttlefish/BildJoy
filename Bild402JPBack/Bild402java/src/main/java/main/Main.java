package main;

import shapes.Circle;
import shapes.Image;
import shapes.Rectangle;
import shapes.Triangle;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) throws Exception {
        try (Scanner scan = new Scanner(System.in)) {
            Image imageZ = new Image(1);
            boolean finish = false;
            System.out.println("Let's add shapes for your Bild");
            while (finish == false) {
                System.out.println("What shape do you want to add?");
                System.out.println("Circle = 1, Rectangle = 2, Triangle = 3");
                int option = scan.nextInt();
                if (option == 1) {

                    System.out.println("How many circles do you want to add?");
                    int c = scan.nextInt();
                    for (int index = 0; index < c; index++) {
                        Circle circleX = new Circle(5);
                        imageZ.addShape(circleX);

                        System.out.println(circleX.toString()); //this states circle radius, Circumference & area of 1 circle
                    }
                    System.out.println("You added "+c+" circles");
                    System.out.println("The total perimer of " + c + " circles is: "
                            + Image.createMultipleCirclesPerimeter(c)
                            + " and the total area is: " + Image.createMultipleCirclesArea(c));

                } else if (option == 2) {
                    System.out.println("How many rectangles do you want to add?");
                    int r = scan.nextInt();
                    for (int index = 0; index < r; index++) {
                        Rectangle rectangleX = new Rectangle(8, 4);
                        System.out.println(rectangleX.toString());
                        imageZ.addShape(rectangleX);
                    }
                    System.out
                            .println("The total perimer of " + r + " rectangles is: "
                                    + Image.createMultipleRectanglesPerimeter(r)
                                    + " and the total area is: " + Image.createMultipleRectanglesArea(r));

                } else if (option == 3) {
                    System.out.println("How many triangles do you want to add?:");
                    int t = scan.nextInt();
                    for (int index = 0; index < t; index++) {
                        Triangle triangleX = new Triangle(5, 5, 5);
                        System.out.println(triangleX.toString());
                        imageZ.addShape(triangleX);
                    }
                    System.out
                            .println("The total perimer of " + t + " triangles is: "
                                    + Image.createMultipleTrianglesPerimeter(t)
                                    + " and the total area is: " + Image.createMultipleTrianglesArea(t));

                } else {
                    System.out.println("That doesn't work\nTry again");
                }
                int answer = 0;
                while (answer != 1 && answer != 2) {
                    System.out.println("Do you want to add more shapes? yes = 1 no = 2");
                    answer = scan.nextInt();
                    if (answer == 1) {
                        finish = false;
                    } else if (answer == 2) {
                        finish = true;
                    } else {
                        System.out.println("That doesn't work try again\n");
                    }
                    System.out.println(imageZ.toString());
                }
            }
        }


        // Circle circle1 = new Circle(3);
        // System.out.println(circle1);
        // circle1.calculerPerimeter();
        // circle1.calculerArea();

        // Rectangle rectangle1 = new Rectangle( 4,2);
        // System.out.println(rectangle1);
        // rectangle1.calculerPerimeter();
        // rectangle1.calculerArea();

        // Triangle triangle1 = new Triangle(5, 5,5);
        // System.out.println(triangle1);
        // triangle1.calculerPerimeter();
        // triangle1.calculerArea();

        // List<Shape> shapes = new ArrayList<>();
        // shapes.add(new Circle(5.0));
        // shapes.add(new Triangle(10.0));
        // shapes.add(new Rectangle(5.0));

        // for(Shape forms:shapes)
        // System.out.println(forms);

        // private static int calculerPerimeter() {
        //     return 0;
        // }
    }}
