import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Login functionality requires Lovable Cloud backend');
  };

  return (
    <Layout>
      <div className="flex min-h-[60vh] items-center justify-center py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold text-foreground">Welcome Back</h1>
            <p className="mt-2 text-muted-foreground">Sign in to your Meridian account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full rounded-full bg-accent py-5 font-semibold text-accent-foreground hover:bg-accent/90">
              Sign In
            </Button>
          </form>
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account? <Link to="/register" className="font-medium text-accent hover:underline">Create one</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
